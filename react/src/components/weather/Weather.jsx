import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGeoApi from "../../hooks/useGeoApi";
import locationIcon from '../../assets/svgs/location.svg'

const Weather = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [currencyData, setCurrencyData] = useState([]);
    const [filteredCurrency, setFilteredCurrency] = useState([]);

    //geoapi custom hook
    const { lat, long } = useGeoApi();

    // console.log(lat, long);

    const getWeatherData = async () => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=06c87d7f534e51b60301ffa18249f1d7`
        );
        const data = await res.json();
        setCurrentLocation(data.name);
        setWeatherData(data);
    };

    const getCurrencyData = async () => {
        const res = await fetch(
            `https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json`
        );
        const data = await res.json();
        setCurrencyData(data[0].currencies);
    };

    useEffect(() => {
        getWeatherData();
    }, [lat, long]);

    useEffect(() => {
        getCurrencyData();
    }, []);

    useEffect(() => {
        setFilteredCurrency(
            currencyData.filter(
                (data) => data.code === "USD" || data.code === "EUR"
            )
        );
    }, [currencyData]);

    return (
        <section className="weather-conteiner">
            <div className="left-side">
                <p className="celsius">
                    {weatherData && weatherData.main && weatherData.main.temp
                        ? Math.round(weatherData.main.temp - 273.15)
                        : ""}{" "}
                    {weatherData && weatherData.main && weatherData.main.temp
                        ? "°"
                        : ""}
                </p>
                <div className="items">
                    {filteredCurrency && (
                        <>
                            <Link
                                to="https://nbg.gov.ge/monetary-policy/currency"
                                target="_blank"
                            >
                                <p>
                                    ($){" "}
                                    {filteredCurrency.length > 1 &&
                                        filteredCurrency[1].code}{" "}
                                    -{" "}
                                    <span>
                                        {filteredCurrency.length > 1 &&
                                            parseFloat(
                                                filteredCurrency[1].rateFormated
                                            ).toFixed(2)}
                                    </span>
                                </p>
                            </Link>
                            <Link
                                to="https://nbg.gov.ge/monetary-policy/currency"
                                target="_blank"
                            >
                                <p>
                                    (€){" "}
                                    {filteredCurrency.length > 1 &&
                                        filteredCurrency[0].code}{" "}
                                    -{" "}
                                    <span>
                                        {filteredCurrency.length > 1 &&
                                            parseFloat(
                                                filteredCurrency[0].rateFormated
                                            ).toFixed(2)}
                                    </span>
                                </p>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="right-side">
                <img src={locationIcon} alt='location icon' style={{width:'14px',height:'14px'}}/>
                <p>
                    {currentLocation && currentLocation === "K'alak'i T'bilisi"
                        ? currentLocation.split(" ")[1]
                        : currentLocation}
                </p>
            </div>
        </section>
    );
};

export default Weather;
