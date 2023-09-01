import { BaseTask } from 'adonis5-scheduler/build'
import axios from 'axios'
import Solar from 'App/Models/Solar'

export default class GetInfoSolarPanel extends BaseTask {
	public static get schedule() {
		return '0 * * * * *'
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
			//? Realizar login
			//? Salvar ckTku

			const login = await axios.post(process.env.URL_SOLAR + "api/auth/login", {
				"email": process.env.EMAIL_SOLAR,
				"password": process.env.PASSORD_SOLAR,
				"token": process.env.TOKEN_SOLAR
			})

			const ckTkU = login.data.cookies.ckTkU

			const config = {
				headers: {
					'Solarview-Tokenuniversal': ckTkU,
				},
			};

			//? Pegar dados Gerais
			const geral = await axios.post(process.env.URL_SOLAR + "portfolio/info", null, config)
			//inserir objeto em um sqlite
			await Solar.create({
				total_consumer_unit: geral.data.totalConsumerUnit,
				total_system_size: geral.data.totalSystemSize,
				total_generation_instant_power: geral.data.totalGenerationInstantPower,
				total_generated_energy: geral.data.totalGeneratedEnergy,
				total_finantial_generation_energy: geral.data.totalFinantialGenerationEnergy,
				total_trees: geral.data.totalTrees,
				sustentabilidade_co2_total: geral.data.sustentabilidadeCO2Total,
				energia_gerada_total: geral.data.energiaGeradaTotal,
				banhos: geral.data.banhos,
				geladeiras: geral.data.geladeiras
			})
			console.log("NewInformations...")
		} catch (err) {
			console.log("Ocorreu um erro ao buscar dados!")
		}

	}
}
