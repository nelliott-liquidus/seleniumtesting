const BASE_URL = 'https://shoplocal-standalonedev.liquidus.net/michaels_us_en_p.html'

const suites = {

  homepageTests: [

    'michaels/navtest.js'

  ]

}

const aliases = {

  navMenuItems: {

    ads: 'Ads',
    categories: 'Categories',
    savedDeals: 'Saved Deals',
    more: 'More',

  }

}

export { BASE_URL, suites, aliases }
