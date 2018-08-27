# CMP Configuration

There are some default configuration values that can be overwritten before CMP is loaded. Following you will find all the configuration properties and their default values.

## Configuration Properties and default Values

|Property|Description|Default Value|
|---|---|---|
|gdpr.gdprApplies|Defines if GDPR applies or not.|true|
|gdpr.storeConsentGlobally|Defines if Consent Storage is Global (true) or Local (false).|false|
|gdpr.globalConsentLocation|The source URL of global storage html.||
|consent.consentScreen|Screen number where consent was given.|1|
|consent.consentLanguage|Defines the language for the UI.|es|
|vendorList.host|Host URL to retrieve Vendor lists.|https://vendorlist.consensu.org|
|log.level|Defines the Log level.|3|

### gdpr.gdprApplies
Defines if GDPR applies or not.

### gdpr.storeConsentGlobally
Defines if Consent Storage is Global (true) or Local (false).

### gdpr.globalConsentLocation
The source URL of global storage html.

### consent.consentScreen
Defines the Screen number in the CMP where consent was given. The screen number is CMP and CmpVersion specific, and is for logging proof of consent

### consent.consentLanguage
This language will be used by the User interface using CMP. Language values are _ISO 639-1_ codes, like:

|Code|Language|Observations|
|---|---|---|
|es|Spanish|Default|
|en|English|Not available yet|


### vendorList.host
To find Vendor lists, CMP tries to retrieve a JSON named _vendorlist.json_ and uses the IAB version structure, as follows:
* Latest Vendor list: https://vendorlist.consensu.org/vendorlist.json
* Specific Vendor list version: https://vendorlist.consensu.org/v-${vendorListVersion}/vendorlist.json
    * where _${vendorListVersion}_ is the specific version to retrieve. For example: https://vendorlist.consensu.org/v-2/vendorlist.json

### log.level
Available log level values:

|Code|Level|
|---|---|
|1|debug|
|2|info|
|3|warn|
|4|error|
|5|off|


## How to set custom values to configuration properties

When CMP initializes it search for a config at *window.__cmp.config* if it is not present CMP uses the default values.

To set custom values to configuration properties just set *window.__cmp.config* before loading CMP as follows:
```javascript
window.__cmp.config = {
    "gdpr": {
        "gdprApplies": true,
        "storeConsentGlobally": false,
        "globalConsentLocation": "./global.html"
    },
    "consent": {
        "consentScreen": 1,
        "consentLanguage": "es"
    },
    "vendorList": {
        "host": "https://vendorlist.consensu.org"
    },
    "log": {
        "level": 1
    }
 }
```