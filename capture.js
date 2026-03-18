// --- Hero-Bot Capture Script ---
const puppeteer = require('puppeteer');

(async () => {
  // 1. Launch the headless browser
  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  
  // 2. Set viewport to Full HD for Digital Signage
  await page.setViewport({ width: 1920, height: 1080 });
  
  // 3. Navigate to your GitHub Pages URL (!!! โปรดแก้ไข URL ด้านล่างเป็นของคุณ !!!)
  const myUrl = 'https://pebordin.github.io/aqi-feed//index.html';
  console.log(`Navigating to: ${myUrl}`);
  await page.goto(myUrl, { waitUntil: 'networkidle2' });
  
  // 4. Wait for data to load and render completely (5 seconds)
  console.log('Waiting for data to load...');
  await new Promise(r => setTimeout(r, 5000));
  
  // 5. Take a screenshot and save it as 'aqi-snap.jpg'
  console.log('Taking screenshot...');
  await page.screenshot({ 
    path: 'aqi-snap.jpg', 
    type: 'jpeg',
    quality: 85 // Adjust quality (0-100) to balance file size vs clarity
  });

  // 6. Close the browser
  await browser.close();
  console.log('Hero-Bot finished successfully!');
})();
