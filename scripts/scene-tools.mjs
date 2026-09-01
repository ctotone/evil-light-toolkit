import { MODULE_ID } from "./constants.mjs";

export const DARKNESS_PRESETS = Object.freeze({
  day: 0,
  dusk: 0.55,
  night: 1
});

export async function applySceneProfile(profile) {
  if (!game.user?.isGM) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.GmOnly"));
  const scene = canvas?.scene;
  if (!scene) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.NoScene"));

  const profiles = {
    exterior: exteriorNightCompatibleUpdate,
    interior: interiorNightCompatibleUpdate,
    darkness: totalDarknessUpdate
  };

  const buildUpdate = profiles[profile];
  if (!buildUpdate) throw new Error(`Unknown scene profile: ${profile}`);

  await scene.update(buildUpdate());
  ui.notifications.info(game.i18n.localize("EVIL_LIGHT_TOOLKIT.Done"));
}

export async function setCalibrationDarkness(key) {
  if (!game.user?.isGM) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.GmOnly"));
  const scene = canvas?.scene;
  if (!scene) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.NoScene"));
  const target = DARKNESS_PRESETS[key];
  if (target === undefined) throw new Error(`Unknown darkness preset: ${key}`);

  const current = scene.environment?.darknessLevel ?? scene.darkness ?? 0;
  await game.settings.set(MODULE_ID, "previousDarkness", current);
  return animateSceneDarkness(scene, target);
}

export async function restorePreviousDarkness() {
  if (!game.user?.isGM) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.GmOnly"));
  const scene = canvas?.scene;
  if (!scene) return ui.notifications.warn(game.i18n.localize("EVIL_LIGHT_TOOLKIT.NoScene"));
  const previous = game.settings.get(MODULE_ID, "previousDarkness");
  if (typeof previous !== "number") return;
  return animateSceneDarkness(scene, previous);
}

async function animateSceneDarkness(scene, darknessLevel) {
  const clamped = Math.clamp(Number(darknessLevel), 0, 1);
  if (typeof scene.animateDarkness === "function") return scene.animateDarkness(clamped);
  return scene.update({ "environment.darknessLevel": clamped });
}

function exteriorNightCompatibleUpdate() {
  const smallTimeActive = game.modules.get("smalltime")?.active === true;
  return {
    "environment.globalLight.enabled": true,
    "environment.globalLight.darkness.min": 0,
    "environment.globalLight.darkness.max": 1,
    "environment.darknessLevelLock": false,
    ...(smallTimeActive
      ? { "flags.smalltime.darkness-link": true }
      : { "environment.darknessLevel": 0 })
  };
}

function interiorNightCompatibleUpdate() {
  const smallTimeActive = game.modules.get("smalltime")?.active === true;
  return {
    "environment.globalLight.enabled": false,
    "environment.darknessLevelLock": false,
    ...(smallTimeActive
      ? { "flags.smalltime.darkness-link": true }
      : { "environment.darknessLevel": 0.25 })
  };
}


function totalDarknessUpdate() {
  const smallTimeActive = game.modules.get("smalltime")?.active === true;
  return {
    "environment.globalLight.enabled": false,
    "environment.darknessLevel": 1,
    ...(smallTimeActive ? { "flags.smalltime.darkness-link": false } : {})
  };
}
