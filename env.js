const config = {
	LINKIDENTITY : ".tableText .sortingLinks",
	URLPATTERN: "https://wwwcfprd.doa.louisiana.gov/osp/lapac/ecat/dsp_eCatSearchLagov.cfm?nStart={pattern}&strSort=ContractNumber&strSortType=1&Tab=2&filterID=2",
	REQUESTOPTION: {
		"rejectUnauthorized": false,
		"method": "POST",	
		"headers":{
				"X-API-VERSION": 1,
	        	"Content-Type" : "application/x-www-form-urlencoded"
	    },
	    "body": "isSearch=TRUE&searchType=LaGOV&Tab=2&Contract= &Description= &TNumberDescription=&TNumber= &Coop=0&VendorName= &SEBD=0&VSE=0&SEHI=0&DVSE=0&LineNumber= &Family= &Class= &LineItemDescription= &CatalogGUID= &SuppPartNo= &Region= &CatItemDescription= &Emergency=0&searchForLaGOV=Contracts&btnSearch=Find It"
	},
	BASEURL: "https://wwwcfprd.doa.louisiana.gov/osp/lapac/ecat/"
}

module.exports = config;