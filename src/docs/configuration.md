# CMP Configuration

There are some default configuration values that can be overwritten before CMP is loaded. Following you will find all the configuration properties and their default values.

## Configuration Properties and default Values

|Property|Description|Default Value|
|---|---|---|
|gdpr.gdprApplies|Defines if GDPR applies or not.|true|
|gdpr.storeConsentGlobally|Defines if Consent Storage is Global.|false|
|gdpr.globalConsentLocation|||
|consent.consentScreen||1|
|consent.consentLanguage|Defines the language.|es|
|vendorList.host|Host URL to retrieve Vendor lists.|https://vendorlist.consensu.org|
|log.level|Defines the Log level.|warning|


### consent.consentLanguage
This language will be used by the User interface using CMP. Language values are _ISO 639-1_ codes, like:

|Code|Language|
|---|---|
|es|Spanish|


### vendorList.host
To find Vendor lists, CMP tries to retrieve a JSON named _vendorlist.json_ and uses the IAB version structure, as follows:
* Latest Vendor list: https://vendorlist.consensu.org/vendorlist.json
* Specific Vendor list version: https://vendorlist.consensu.org/v-${vendorListVersion}/vendorlist.json
    * where _${vendorListVersion}_ is the specific version to retrieve. For example: https://vendorlist.consensu.org/v-2/vendorlist.json

### log.level
Available log level values:
* warn
* debug
* info
* error
* off

## How to set custom values to configuration properties