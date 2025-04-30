function calculate() {
    let Nominal_power  = parseFloat(document.getElementById("1").value); // середньодобова потужність
    let Utilization_factor = parseFloat(document.getElementById("2").value);  // середнє відхилення
    let Reactive_power = parseFloat(document.getElementById("3").value);  // зменшена похибка
    if (isNaN(Nominal_power) || isNaN(Utilization_factor) || isNaN(Reactive_power)) {
        alert("Потрібно заповнити всі поля!");
        return;
    }

    //Номінальне значення ККД,коефіцієнт потужності та напруга навантаження є однаковою для всіх ЕП
    let nominal_value=0.92
    let Power_factor =0.9
    let Load_voltage=0.38


    let powerShop = 2330;
    let powerUtilizationShop = 752;
    let powerReactiveShop = 657;
    let powerTotalShop = 96388;


    //Значення для  шліфувального верстату
    let Num_power_1=Nominal_power;
    let Num_1 = 4
    let Utilization_factor_1 = 0.15
    let Reactive_power_1 = 1.33

    //Значення для  свердлильного верстату
    let Num_2 = 2
    let Num_power_2=14
    let Utilization_factor_2 = 0.12
    let Reactive_power_2 = 1

    //Значення для  фугувального верстату
    let Num_3 = 4
    let Num_power_3=42
    let Utilization_factor_3 = 0.15
    let Reactive_power_3 = 1.33

    //Значення для  циркулярної пили
    let Num_4 = 1
    let Num_power_4=36
    let Utilization_factor_4 = 0.3
    let Reactive_power_4 = Reactive_power

    //Значення для преса
    let Num_5 = 1
    let Num_power_5=20
    let Utilization_factor_5 = 0.5
    let Reactive_power_5 = 0.75

    //Значення для полірувального верстата
    let Num_6 = 1
    let Num_power_6=40
    let Utilization_factor_6 = Utilization_factor
    let Reactive_power_6 = 1

    //Значення для фрезерного станка
    let Num_7 = 2
    let Num_power_7=32
    let Utilization_factor_7 = 0.2
    let Reactive_power_7 = 1

    //Значення для вентилятора
    let Num_8 = 1
    let Num_power_8=20
    let Utilization_factor_8 = 0.65
    let Reactive_power_8 = 0.75


    let totalPower1 = Num_1*Num_power_1;
    let totalPower2 = Num_2*Num_power_2;
    let totalPower3 = Num_3*Num_power_3;
    let totalPower4 = Num_4*Num_power_4;
    let totalPower5 = Num_5*Num_power_5;
    let totalPower6 = Num_6*Num_power_6;
    let totalPower7 = Num_7*Num_power_7;
    let totalPower8 = Num_8*Num_power_8;



    // Розрахунковий струм
    let Rated_current_1 = totalPower1 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_2 = totalPower2 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_3 = totalPower3 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_4 = totalPower4 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_5 = totalPower5 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_6 = totalPower6 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_7 = totalPower7 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;
    let Rated_current_8 = totalPower8 / ((3**0.5) * nominal_value * Power_factor * Load_voltage) ;

    // груповий коефіцієнт використання:
    let sum_nphk_1 = totalPower1 * Utilization_factor_1;
    let sum_nphk_2 = totalPower2 * Utilization_factor_2;
    let sum_nphk_3 = totalPower3 * Utilization_factor_3;
    let sum_nphk_4 = totalPower4 * Utilization_factor_4;
    let sum_nphk_5 = totalPower5 * Utilization_factor_5;
    let sum_nphk_6 = totalPower6 * Utilization_factor_6;
    let sum_nphk_7 = totalPower7 * Utilization_factor_7;
    let sum_nphk_8 = totalPower8 * Utilization_factor_8;

    let sum_nphk = sum_nphk_1+sum_nphk_2+sum_nphk_3+sum_nphk_4+sum_nphk_5+sum_nphk_6+sum_nphk_7+sum_nphk_8;
    let sum_nph = totalPower1+totalPower2+totalPower3+totalPower4+totalPower5+totalPower6+totalPower7+totalPower8;

    let KB = sum_nphk/sum_nph;

    // ефективна кількість ЕП
    let Ne = (sum_nph**2)/(Num_1*(Num_power_1**2)+Num_2*(Num_power_2**2)+Num_3*(Num_power_3**2)+Num_4*(Num_power_4**2)+Num_5*(Num_power_5**2)+Num_6*(Num_power_6**2)+Num_7*(Num_power_7**2)+Num_8*(Num_power_8**2));

    // розрахункове активне навантаження:
    let powerCoefficient= 1.25;
    let Pp=sum_nphk*powerCoefficient;

    // розрахункове реактивне навантаження:
    let reactive_load_1 = totalPower1*Utilization_factor_1*Reactive_power_1;
    let reactive_load_2 = totalPower2*Utilization_factor_2*Reactive_power_2;
    let reactive_load_3 = totalPower3*Utilization_factor_3*Reactive_power_3;
    let reactive_load_4 = totalPower4*Utilization_factor_4*Reactive_power_4;
    let reactive_load_5 = totalPower5*Utilization_factor_5*Reactive_power_5;
    let reactive_load_6 = totalPower6*Utilization_factor_6*Reactive_power_6;
    let reactive_load_7 = totalPower7*Utilization_factor_7*Reactive_power_7;
    let reactive_load_8 = totalPower8*Utilization_factor_8*Reactive_power_8;

    let Qp = reactive_load_1+reactive_load_2+reactive_load_3+reactive_load_4+reactive_load_5+reactive_load_6+reactive_load_7+reactive_load_8;


    // повнa потужність:
    let full_load = (Pp ** 2 + Qp ** 2) ** 0.5;

    // розрахунковий груповий струм :
    let Ip = Pp/Load_voltage

    // коефіцієнти використання цеху в цілому:
    let full_use = powerUtilizationShop / powerShop;

    // ефективну кількість ЕП цеху в цілому:
    let effective_Shop = powerShop ** 2 / powerTotalShop;

    // розрахунковий коефіцієнт активної потужності
    let power_Shop = 0.7;

    //розрахункове активне навантаження на шинах:
    let calc_active_load = power_Shop * powerUtilizationShop;

    // розрахункове реактивне навантаження на шинах
    let calc_reactive_load = power_Shop * powerReactiveShop;

    // повну потужність на шинах :
    let totPowerShop = (calc_active_load ** 2 + calc_reactive_load ** 2) ** 0.5;

    //розрахунковий груповий струм на шинах :
    let calc_group_current = calc_active_load / Load_voltage;

    document.getElementById("res").innerHTML = `
    <h3>Результати розрахунків</h3>
    <ul>
        <li><h3>Груповий коефіцієнт використання для ШР1=ШР2=ШР3: <span class="result-value">${KB.toFixed(3)}</span></h3></li>
        <li><h3>Ефективна кількість ЕП для ШР1=ШР2=ШР3: <span class="result-value">${Ne.toFixed(3)}</span></h3></li>
        <li><h3>Розрахунковий коефіцієнт активної потужності для ШР1=ШР2=ШР3: <span class="result-value">${powerCoefficient.toFixed(3)}</span></h3></li>
        <li><h3>Розрахункове активне навантаження для ШР1=ШР2=ШР3: <span class="result-value">${Pp.toFixed(3)} кВт</span></h3></li>
        <li><h3>Розрахункове реактивне навантаження для ШР1=ШР2=ШР3: <span class="result-value">${Qp.toFixed(3)} квар</span></h3></li>
        <li><h3>Повна потужність для ШР1=ШР2=ШР3: <span class="result-value">${full_load.toFixed(3)} кВ*А</span></h3></li>
        <li><h3>Розрахунковий груповий струм для ШР1=ШР2=ШР3: <span class="result-value">${Ip.toFixed(3)} А</span></h3></li>
        <li><h3>Коефіцієнти використання цеху в цілому: <span class="result-value">${full_use.toFixed(3)}</span></h3></li>
        <li><h3>Ефективна кількість ЕП цеху в цілому: <span class="result-value">${effective_Shop.toFixed(3)}</span></h3></li>
        <li><h3>Розрахунковий коефіцієнт активної потужності цеху в цілому: <span class="result-value">${power_Shop.toFixed(3)}</span></h3></li>
        <li><h3>Розрахункове активне навантаження на шинах 0,38 кВ ТП: <span class="result-value">${calc_active_load.toFixed(3)} кВт</span></h3></li>
        <li><h3>Розрахункове реактивне навантаження на шинах 0,38 кВ ТП: <span class="result-value">${calc_reactive_load.toFixed(3)} квар</span></h3></li>
        <li><h3>Повна потужність на шинах 0,38 кВ ТП: <span class="result-value">${totPowerShop.toFixed(3)} кВ*А</span></h3></li>
        <li><h3>Розрахунковий груповий струм на шинах 0,38 кВ ТП: <span class="result-value">${calc_group_current.toFixed(3)} А</span></h3></li>
    </ul>`;

}

