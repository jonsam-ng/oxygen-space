/*****************************************************************************************
 *                                 页面配置【建站自定义】
 ******************************************************************************************/

export const siteName = "氧气空间";

export const siteDesc = "三五知己相逢，几许墨香共享。";

// 是否使用 github pages 的自定义域名
export const useCustomDomainName = true;
export const customDomainName = "ox.jonsam.site";

export const siteKeywords = "阅读,书籍,书籍下载,书籍推荐";

// 同时修改 `docs/.vuepress/styles/palette.styl` 中 `$accentColor`
export const siteThemeColor = "#DC5B68";

export const siteIconFont = "//at.alicdn.com/t/font_3314748_9xij1pv3h4i.css";

export const siteRepo = "jonsam-ng/oxygen-space";

export const siteLicense = "MIT";

export const personalLink = "https://www.jonsam.site";

export const siteAuthor = {
  name: "jonsam",
  link: "https://github.com/jonsam-ng",
};

export const siteBlogger = {
  avatar:
    "https://www.jonsam.site/wp-content/uploads/2019/10/c1fbc401c64937aaec6cb53359e7c57eabd8e477-e1570649725791.gif",
  name: "Jonsam NG",
  slogan: "让有意义的事变得有意思，让有意思的事变得有意义",
};

export const siteFooter = {
  createYear: 2022,
  copyrightInfo: `${siteName} | Template by <a href="https://jonsam-ng.github.io/fancy-note-starter/">Fancy Note Starter</a> | Made by <a href=${personalLink} target="_blank">${siteAuthor.name}</a> with ❤<br /><span>本站所有书籍信息及简介均来自互联网，如页面侵犯到著作人及版权方，本站不负一切责任！</span></span>`,
};

export const siteBase = useCustomDomainName ? "/" : `/${siteRepo}/`;
export const siteHost = useCustomDomainName
  ? `https://${customDomainName}`
  : siteAuthor.link;
export const siteUrl = siteHost + siteBase;
