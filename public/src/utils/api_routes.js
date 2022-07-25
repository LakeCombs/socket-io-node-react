// const host = "http://locahost/8000";

const api = {
	login: `${host}/api/auth/login`,
	register: `${host}/api/auth/register`,
	logout: `${host}/api/auth/logout`,
	allUsers: `${host}/api/auth/allusers`,
	sendMessage: `${host}/api/messages/addmsg`,
	recieveMessage: `${host}/api/messages/getmsg`,
	setAvatar: `${host}/api/auth/setavatar`,
};

export default api;

