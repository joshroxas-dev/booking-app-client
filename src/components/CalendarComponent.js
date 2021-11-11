import React, { useState } from 'react';

import Calendar from 'react-calendar';

import ModalComponent from "./ModalComponent";

import moment from 'moment';

import 'react-calendar/dist/Calendar.css';

import * as api from "../api";

const CalendarComponent = ({ bookedDates, id, getUnits }) => {

	const [ value, onChange ] = useState(new Date());
    const [ currentDay, setCurrentDay ] = useState(new Date());
    const [ modalVisible, setModalVisible] = useState(false);
    const [ loader, setLoader ] = useState(false);


	const tileDisabled = ({ date, view }) => {
        const dateContext = moment(date);
		for (let i = 0; i < bookedDates.length; i++) {
   
            if (dateContext.format('MM/DD/YYYY') === moment(bookedDates[i]).format('MM/DD/YYYY')) {
                if (dateContext.day() === 0) {
                    return dateContext.day() === 0;
                } else {
                    return dateContext.day();
                }
            }
            
            // if (dateContext.format('MM/DD/YYYY') > moment().format("MM/DD/YYYY")) {
            //     return dateContext.day();
            // }
		}
	}

    const bookDate = async () => {
        console.log("date booked");
        setLoader(true);
        try {
            console.log("current day book", currentDay);
            const data = await api.bookDate({date: currentDay}, id);
            console.log("data updated", data);
            setModalVisible(false);
            setLoader(false);
            getUnits();
        } catch (error) {
            console.log("cannot book the date", error);
            setLoader(false);
        }
    }

    const handleModal = (day) => {
        console.log("modal current day",day);
        setModalVisible(true);
        setCurrentDay(moment(day).format("MM/DD/YYYY"));
    }

	return (
		<div>
            {
                modalVisible && (
                    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} day={currentDay} saveFunction={() => bookDate()} loader={loader} />
                )
            }
        
			<Calendar minDate={new Date()} className="mx-auto my-4" onChange={onChange} value={value} tileDisabled={tileDisabled} onClickDay={(day) => handleModal(day)}/>
		</div>
	);
};

export default CalendarComponent;
