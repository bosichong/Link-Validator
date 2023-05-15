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
    // {
    //     site: "127.0.0.1:8888",
    //     ulr: "http://127.0.0.1:8888"
    // }
];




function get_user_agent_pc() {
    const user_agent_pc = [
        // 谷歌
        'Mozilla/5.0.html (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.html.2171.71 Safari/537.36',
        'Mozilla/5.0.html (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.html.1271.64 Safari/537.11',
        'Mozilla/5.0.html (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.html.648.133 Safari/534.16',
        // 火狐
        'Mozilla/5.0.html (Windows NT 6.1; WOW64; rv:34.0.html) Gecko/20100101 Firefox/34.0.html',
        'Mozilla/5.0.html (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10',
        // opera
        'Mozilla/5.0.html (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.html.2171.95 Safari/537.36 OPR/26.0.html.1656.60',
        // qq浏览器
        'Mozilla/5.0.html (compatible; MSIE 9.0.html; Windows NT 6.1; WOW64; Trident/5.0.html; SLCC2; .NET CLR 2.0.html.50727; .NET CLR 3.5.30729; .NET CLR 3.0.html.30729; Media Center PC 6.0.html; .NET4.0C; .NET4.0E; QQBrowser/7.0.html.3698.400)',
        // 搜狗浏览器
        'Mozilla/5.0.html (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.html.963.84 Safari/535.11 SE 2.X MetaSr 1.0.html',
        // 360浏览器
        'Mozilla/5.0.html (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.html.1599.101 Safari/537.36',
        'Mozilla/5.0.html (Windows NT 6.1; WOW64; Trident/7.0.html; rv:11.0.html) like Gecko',
        // uc浏览器
        'Mozilla/5.0.html (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.html.2125.122 UBrowser/4.0.html.3214.0.html Safari/537.36',
    ];
    return user_agent_pc[Math.floor(Math.random() * user_agent_pc.length)];
}




function get_user_agent_phone() {
    const user_agent_phone = [
        // IPhone
        'Mozilla/5.0.html (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.html.2 Mobile/8J2 Safari/6533.18.5',
        // IPAD
        'Mozilla/5.0.html (iPad; U; CPU OS 4_2_1 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.html.2 Mobile/8C148 Safari/6533.18.5',
        'Mozilla/5.0.html (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.html.2 Mobile/8J2 Safari/6533.18.5',
        // Android
        'Mozilla/5.0.html (Linux; U; Android 2.2.1; zh-cn; HTC_Wildfire_A3333 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0.html Mobile Safari/533.1',
        'Mozilla/5.0.html (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0.html Mobile Safari/533.1',
        // QQ浏览器 Android版本
        'MQQBrowser/26 Mozilla/5.0.html (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0.html Mobile Safari/533.1',
        // Android Opera Mobile
        'Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10',
        // Android Pad Moto Xoom
        'Mozilla/5.0.html (Linux; U; Android 3.0.html; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0.html Safari/534.13',
    ];
    return user_agent_phone[Math.floor(Math.random() * user_agent_phone.length)];
}

function getUserAgent(){
    return Math.random() < 0.5 ? get_user_agent_phone() : get_user_agent_pc();
}


// Loop through each link and fetch its HTML code
for (let link of links) {
    let maxRetries = 3;
    let retries = 0;
    let headers = {'User-Agent':getUserAgent()}
    fetchWithRetry(link.ulr,{headers});

    function fetchWithRetry(url,init) {
        fetch(url,init)
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
                    fetchWithRetry(url,init);
                } else {
                    console.log(`An error occurred while fetching ${link.ulr}`, error);
                }
            });
    }
}
