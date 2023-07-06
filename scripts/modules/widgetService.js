import { fetchWeather } from "./APIservice.js"
import { 
    renderWidgetForecast, 
    renderWidgetOther, 
    renderWidgetToday 
} from "./render.js"

export const startWidget = async () => {
    const widget = document.createElement('div')
    widget.classList.add('widget')

    // fetchWeather('Калининград')
    // fetchWeather('London')
    const dataWeather = await fetchWeather('Ульяновск')

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data)
        renderWidgetOther(widget, dataWeather.data)
    } else {
        showError(widget)
    }
    
    renderWidgetForecast(widget)

    return widget
}
