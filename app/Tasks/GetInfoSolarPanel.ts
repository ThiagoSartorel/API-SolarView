import { BaseTask } from 'adonis5-scheduler/build'
import Auth from 'App/Helper/Auth'
import GetInfo from 'App/Helper/GetInfo'
import Store from 'App/Helper/Store'
export default class GetInfoSolarPanel extends BaseTask {
	public static get schedule() {
		return '0 0 * * * *'
	}
	/**
	 * Set enable use .lock file for block run retry task
	 * Lock file save to `build/tmpTaskLock`
	 */
	public static get useLock() {
		return false
	}

	public async handle() {
		try {
			//? Funcao Auth realiza a autenticacao no solarview
			const ckTkU = await Auth()
			//? Coletado as informacoes do solarview
			if (ckTkU) {
				const info = await GetInfo(ckTkU)
				if (info) {
					//? Salvar dados recebidos
					Store(info)
				}
			}

			const date = new Date()
			console.log("|V| ...", date.toLocaleDateString(), "-", date.toLocaleTimeString())
		} catch (err) {
			console.log(err.message)
		}
	}
}
