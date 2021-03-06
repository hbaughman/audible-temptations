
export const AUDIBLE_CLIENT_ID = 
  "amzn1.application-oa2-client.6cb3fbe8ae624b05ab9458f698945ef7";

// OAUTH
export const AUDIBLE_REDIRECT_URI = (__DEV__)
  ? "http://localhost:3000/auth"
  : "https://audibleTemptations.firebaseapp.com/auth";
export const OAUTH_REQUEST = "https://www.amazon.com/ap/oa"
  + "?client_id=" + AUDIBLE_CLIENT_ID
  + "&scope=profile%20profile:user_id%20audible:annotations_read%20audible:browse_read%20audible:catalog_read%20audible:content_read"
  + "&response_type=token"
  + "&redirect_uri=" + AUDIBLE_REDIRECT_URI;

// Recommendations
export const AUDIBLE_RECOMMENDATIONS_URL = 
  "https://api.audible.com/1.0/recommendations?response_groups=product_desc&num_results=5"

export const GYMS = [
  {
    name : "19th Street Gym",
    distance : "25 ft",
    location : "W 19th Street, New York NY 10010",
    join_agreement : true
  },
  {
    name : "David Barton Gym",
    distance : "2.5 miles",
    location : "656 6th Avenue, New York, NY 10010",
    join_agreement : false
  },
  {
    name : "Douglass Mahoney Fitness Center",
    distance : "2.2 miles",
    location : "1818 Gebralter Ave, New York, NY 10017",
    join_agreement : false
  },
  {
    name : "Kevin Nealon Deadlift Emporium",
    distance : "1.5 miles",
    location : "44 W Allen Street, New York, Ny 10015",
    join_agreement : true
  },
  {
    name : "Astor Place Gym and Spa",
    distance : "2.5 miles",
    location : "65 Astor Place, New York, NY 10004",
    join_agreement : false
  }
];


// Sample Data because of CORS problems
export const INITIAL_BOOKS = [
  {
    "asin": "B01BNV6HPG",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/61mikBPhPDL._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/tant/005700/bk_tant_005700_sample.mp3",
    "subtitle": "The Men Who Won the Roman Empire",
    "title": "In the Name of Rome"
    , "isHostage": false
  },
  {
    "asin": "B00TSRX9I6",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/51XxVZ4CKCL._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/tant/004536/bk_tant_004536_sample.mp3",
    "subtitle": "The Story of History's Most Famous Assassination",
    "title": "The Death of Caesar"
    , "isHostage": false
  },
  {
    "asin": "B01A1FD032",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/61N0SPxErpL._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/tcco/000428/bk_tcco_000428_sample.mp3",
    "title": "The Mysterious Etruscans"
    , "isHostage": false
  },
  {
    "asin": "B00LPMD72K",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/514mZ8eoG0L._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/adbl/018757/bk_adbl_018757_sample.mp3",
    "subtitle": "Paths, Dangers, Strategies",
    "title": "Superintelligence"
    , "isHostage": false
  },
  {
    "asin": "B00ICRLMWI",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/51yotsewD6L._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/sans/006646/bk_sans_006646_sample.mp3",
    "subtitle": "A Wall Street Revolt",
    "title": "Flash Boys"
    , "isHostage": false
  },
  {
    "asin": "B01865AOJW",
    "product_images": {
      "500": "https://images-na.ssl-images-amazon.com/images/I/51vjHVIvmjL._SL500_.jpg"
    },
    "sample_url": "http://samples.audible.com/bk/reco/009110/bk_reco_009110_sample.mp3",
    "subtitle": "A History of Ancient Rome",
    "title": "SPQR"
    , "isHostage": false
  }
];

export const SAMPLE_BOOKS = {
  "products": [
    {
      "asin": "B01BNV6HPG",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/61mikBPhPDL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tant/005700/bk_tant_005700_sample.mp3",
      "subtitle": "The Men Who Won the Roman Empire",
      "title": "In the Name of Rome"
    },
    {
      "asin": "B00TSRX9I6",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51XxVZ4CKCL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tant/004536/bk_tant_004536_sample.mp3",
      "subtitle": "The Story of History's Most Famous Assassination",
      "title": "The Death of Caesar"
    },
    {
      "asin": "B01A1FD032",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/61N0SPxErpL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/tcco/000428/bk_tcco_000428_sample.mp3",
      "title": "The Mysterious Etruscans"
    },
    {
      "asin": "B00LPMD72K",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/514mZ8eoG0L._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/adbl/018757/bk_adbl_018757_sample.mp3",
      "subtitle": "Paths, Dangers, Strategies",
      "title": "Superintelligence"
    },
    {
      "asin": "B00ICRLMWI",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51yotsewD6L._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/sans/006646/bk_sans_006646_sample.mp3",
      "subtitle": "A Wall Street Revolt",
      "title": "Flash Boys"
    },
    {
      "asin": "B01865AOJW",
      "product_images": {
        "500": "https://images-na.ssl-images-amazon.com/images/I/51vjHVIvmjL._SL500_.jpg"
      },
      "sample_url": "http://samples.audible.com/bk/reco/009110/bk_reco_009110_sample.mp3",
      "subtitle": "A History of Ancient Rome",
      "title": "SPQR"
    }
  ],
  "response_groups": [
    "product_desc",
    "always-returned",
    "media",
    "sample"
  ],
  "total_results": 6
}
