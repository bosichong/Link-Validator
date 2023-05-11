let siteUrl = 'suiyan.cc'; // Define the site URL as a variable

let links = [
    {
        site: "你好我是森林",
        ulr: "https://demochen.com/links/"
    },
    {
        site: "糊涂说",
        ulr: "https://hutusi.com/links/"
    },
    {
        site: "Jason",
        ulr: "http://atjason.com/links/"
    },
    {
        site: "咕咚同学",
        ulr: "https://gudong.site/links.html"
    },
    {
        site: "米虫的博客",
        ulr: "http://www.mebugs.com/page/link.html"
    },
    {
        site: "图灵技术域",
        ulr: "https://www.omegaxyz.com/friends/"
    },
    {
        site: "土木坛子",
        ulr: "https://tumutanzi.com/links"
    },
    {
        site: "折影轻梦",
        ulr: "https://nexmoe.com/PY.html"
    },
    {
        site: "Lime's Blog",
        ulr: "https://blog.qninq.cn/"
    },
    {
        site: "折影轻梦",
        ulr: "https://nexmoe.com/PY.html"
    }
];

// Loop through each link and fetch its HTML code
for (let link of links) {
    let maxRetries = 3;
    let retries = 0;
    fetchWithRetry(link.ulr);

    function fetchWithRetry(url) {
        fetch(url)
            .then(response => {
                if ((response.status >= 400 && response.status <= 499) || (response.status >= 500 && response.status <= 599)) {
                    console.warn(`${link.site}: 网站已无法打开`);
                } else {
                    return response.text();
                }
            })
            .then(responseHTML => {
                // Check if the HTML code contains the suyan URL variable
                if (responseHTML && responseHTML.includes(siteUrl)) {
                    console.log(`${link.site}: 友联成功`);
                } else if (responseHTML) {
                    console.warn(`${link.site}: 不存在友联`);
                }
            })
            .catch(error => {
                retries++;
                if (retries <= maxRetries) {
                    console.log(`Retrying ${link.ulr}...`);
                    fetchWithRetry(url);
                } else {
                    console.log(`An error occurred while fetching ${link.ulr}`, error);
                }
            });
    }
}
