// initial page load's url
function url() {
  return "https://www.youtube.com";
}

// action where you suspect the memory leak might be happening
async function action(page) {
  await page.click('[id="video-title-link"]');
}

// how to go back to the state before action
async function back(page) {
  await page.click('[id="logo-icon"]');
}

module.exports = { action, back, url };
