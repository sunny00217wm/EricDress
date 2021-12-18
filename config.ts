import { ConfigTS } from 'config/config.type';

/**
 * 機器人的設定檔
 */
export const config: ConfigTS = {
	token: process.env.TOKEN, // BotFather 給你的 Token，類似「123456789:q234fipjfjaewkflASDFASjaslkdf」

	launchType: 'webhook',

	webhook: { // 使用 webhook
		port: Number( process.env.PORT ), // Webhook 埠，為 0 時不啟用 Webhook
		hookPath: process.env.WEBHOOKPATH, // Webhook 路徑
		url: 'https://' + process.env.DOMAIN + process.env.WEBHOOKPATH // Webhook 最終的完整 URL，可被外部存取，用於呼叫 Telegram 介面自動設定網址
	},

	logging: {
		/**
		 * 紀錄檔等級：從詳細到簡單分別是 debug、info、warning、error，推薦用 info
		 */
		level: 'debug',

		/**
		 * 紀錄檔檔名，如留空則只向螢幕輸出
		 */
		logfile: '',

		logToChannel: Number( process.env.LOGTOCHANNEL )
	},

	msgs: {
		title: '劉醬快女裝！',

		thumb_url: {
			path: 'thumb.txt'
		},

		content: {
			path: 'content.txt'
		},

		wrap: {
			path: 'wrap.txt'
		},

		error: '初始化女裝失敗，可能是因為你惹劉醬生氣了？'
	}
};
