

const {google} = require('googleapis');
const Photos = require('googlephotos');

// Send the user to the url from above. Once they grant access they will be redirected to the
// the redirect URL above with a query param code in the redirect. Use the code below to get the
// access token.

// const {tokens} = await oauth2Client.getToken(code);

// The token from above can be used to initialize the photos library.


export function GooglePhotos() {


const oauth2Client = new google.auth.OAuth2('852535045461-tf47rb7bcuapkmvsl34ng8r16tn5oqcb.apps.googleusercontent.com', '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', 'http://localhost:3000/');

const scopes = [Photos.Scopes.READ_ONLY, Photos.Scopes.SHARING];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

  return <h1>Google pIcs</h1>
}
