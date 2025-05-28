const fs = require('fs');
const path = require('path');

describe('Welcome Page', () => {
  let htmlContent;

  beforeAll(() => {
    // Read the HTML file
    const htmlPath = path.join(__dirname, '..', 'index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set up a DOM environment
    document.documentElement.innerHTML = htmlContent;
  });

  test('should have a title', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent).toContain('AI技术前沿');
  });

  test('should have a header with navigation', () => {
    const header = document.querySelector('header');
    expect(header).not.toBeNull();
    
    const nav = header.querySelector('nav');
    expect(nav).not.toBeNull();
    
    const navItems = nav.querySelectorAll('li');
    expect(navItems.length).toBeGreaterThanOrEqual(6);
  });

  test('should have a hero section', () => {
    const heroSection = document.querySelector('.hero');
    expect(heroSection).not.toBeNull();
    
    const heroContent = heroSection.querySelector('.hero-content');
    expect(heroContent).not.toBeNull();
    
    const ctaButton = heroContent.querySelector('.cta-button');
    expect(ctaButton).not.toBeNull();
  });
  
  test('explore button should link to Baidu', () => {
    const ctaButton = document.querySelector('.cta-button');
    expect(ctaButton).not.toBeNull();
    expect(ctaButton.tagName).toBe('A');
    expect(ctaButton.href).toBe('https://www.baidu.com/');
  });

  test('should have all six required content sections', () => {
    // Check for the six core sections mentioned in the issue
    const realTimeInfoSection = document.getElementById('real-time-info');
    expect(realTimeInfoSection).not.toBeNull();
    expect(realTimeInfoSection.querySelector('h2').textContent).toContain('实时资讯');
    
    const aiInsightsSection = document.getElementById('ai-insights');
    expect(aiInsightsSection).not.toBeNull();
    expect(aiInsightsSection.querySelector('h2').textContent).toContain('AI洞察');
    
    const techTrendsSection = document.getElementById('tech-trends');
    expect(techTrendsSection).not.toBeNull();
    expect(techTrendsSection.querySelector('h2').textContent).toContain('技术趋势');
    
    const researchSection = document.getElementById('research');
    expect(researchSection).not.toBeNull();
    expect(researchSection.querySelector('h2').textContent).toContain('前沿研究');
    
    const applicationsSection = document.getElementById('applications');
    expect(applicationsSection).not.toBeNull();
    expect(applicationsSection.querySelector('h2').textContent).toContain('应用案例');
    
    const communitySection = document.getElementById('community');
    expect(communitySection).not.toBeNull();
    expect(communitySection.querySelector('h2').textContent).toContain('开发者社区');
  });

  test('should have a footer', () => {
    const footer = document.querySelector('footer');
    expect(footer).not.toBeNull();
    
    const footerContent = footer.querySelector('.footer-content');
    expect(footerContent).not.toBeNull();
    
    const footerBottom = footer.querySelector('.footer-bottom');
    expect(footerBottom).not.toBeNull();
  });

  test('should load external CSS and JavaScript files', () => {
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    expect(cssLinks.length).toBeGreaterThanOrEqual(1);
    
    const scripts = document.querySelectorAll('script');
    expect(scripts.length).toBeGreaterThanOrEqual(1);
    
    // Check for our main.js file
    let hasMainJs = false;
    scripts.forEach(script => {
      if (script.src && script.src.includes('main.js')) {
        hasMainJs = true;
      }
    });
    expect(hasMainJs).toBe(true);
  });
});