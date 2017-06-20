import Qs from 'qs'
export default{
	debug: false,
	baseURL: 'http://api.xfbmx.cn/',
	//baseURL: 'http://172.20.32.159:80/v1/dtp/service/',
	requestType: "json",
	requestParams: {
    article: {
			page: {
				url: "Article/page"
			},
			top: {
				url: "get/record"
			},
		},
	},

	getParamInfo: function (URL) {

		var paramInfo = null;
		eval("paramInfo = this.requestParams."+URL);
		return paramInfo;
	},
	transformRequest: [function (data) {
		//为了避免qs格式化时对内层对象的格式化先把内层的对象转为
		data.CustData = JSON.stringify(data.CustData);
		//由于使用的form-data传数据所以要格式化
		data = Qs.stringify(data);
		return data;
	}],


	transformResponse: [function (data) {

		return data;
	}],

	paramsSerializer: function(params) {
		return Qs.stringify(params)
	},


	withCredentials: false, // default


	responseType: 'json', // default


	onUploadProgress: function (progressEvent) {
		// Do whatever you want with the native progress event
	},


	onDownloadProgress: function (progressEvent) {
		// Do whatever you want with the native progress event
	},


	maxContentLength: 2000,


	validateStatus: function (status) {
		return status >= 200 && status < 300; // default
	},


	maxRedirects: 5, // default
}
