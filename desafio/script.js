let form = document.getElementById('form');
let select = document.getElementById('opcoes');
let converter = document.getElementById('value');
    // alert(`O valor convertido de Dólar Americano para Real é R$ ${real.toFixed(2)}`);

form.addEventListener('submit', function(e) {
  e.preventDefault()
  if(select.value == '1') {
    let real = parseFloat(converter.value) * 5.51;
    document.getElementById('res').value = `R$${real.toFixed(2)}`;
  }
  if(select.value == '2') {
    let libra = parseFloat(converter.value) * 0.72;
    document.getElementById('res').value = `£${libra.toFixed(2)}`;
  }
  if(select.value == '3') {
    let dolar = parseFloat(converter.value) * 0.18;
    document.getElementById('res').value = `U$${dolar.toFixed(2)}`;
  }
  if(select.value == '4') {
    let libra = parseFloat(converter.value) * 0.13;
    document.getElementById('res').value = `£${libra.toFixed(2)}`;
  }
  if(select.value == '5') {
    let dolar = parseFloat(converter.value) * 1.39;
    document.getElementById('res').value = `£${dolar.toFixed(2)}`;
  }
  if(select.value == '6') {
    let real = parseFloat(converter.value) * 7.64;
    document.getElementById('res').value = `R$${real.toFixed(2)}`;
  }
  if(select.value == '7') {
    let fahrenheit = ((parseFloat(converter.value) * (9/5)) + 32);
    document.getElementById('res').value = `${fahrenheit.toFixed(1)}°F`;
  }
  if(select.value == '8') {
    let kelvin = parseFloat(converter.value) + 273.15;
    document.getElementById('res').value = `${kelvin.toFixed(1)} °K`;
  }
  if(select.value == '9') {
    let celsius = ((parseFloat(converter.value) - 32) * (5/9)); 
    document.getElementById('res').value = `${celsius.toFixed(1)}°C`;
  }
  if(select.value == '10') {
    let kelvin = (parseFloat(converter.value) - 32) * (5/9) + 273.15;
    document.getElementById('res').value = `${kelvin.toFixed(1)} °K`;
  }
  if(select.value == '11') {
    let celsius = parseFloat(converter.value) - 273.15;
    document.getElementById('res').value = `${celsius.toFixed(1)} °C`;
  }
  if(select.value == '12') {
    let fahrenheit = ((parseFloat(converter.value) - 273.15) * (9/5) + 32);
    document.getElementById('res').value = `${fahrenheit.toFixed(1)}°F`;
  }
});