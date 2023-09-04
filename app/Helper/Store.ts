import Solar from "App/Models/Solar"
import { SolarInfo } from "../../typings/SolarInfo"

export default function Store(info: SolarInfo) {
    console.log('|!| Salvando dados...')
    Solar.create({
        total_consumer_unit: info.totalConsumerUnit,
        total_system_size: info.totalSystemSize,
        total_generation_instant_power: info.totalGenerationInstantPower,
        total_generated_energy: info.totalGeneratedEnergy,
        total_finantial_generation_energy: info.totalFinantialGenerationEnergy,
        total_trees: info.totalTrees,
        sustentabilidade_co2_total: info.sustentabilidadeCO2Total,
        energia_gerada_total: info.energiaGeradaTotal,
        banhos: info.banhos,
        geladeiras: info.geladeiras
    })
    console.log('|V| Sucesso ao salvar!')
    console.log('|||')
}