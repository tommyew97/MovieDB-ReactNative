import {SubmitHandler, useForm} from "react-hook-form";
import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {changeFilters} from "../Actions";
import { View } from "react-native";

export type Genres = "Action" | "Comedy" | "Musical" | "Romance" | "Drama" | "Horror";
export const genres: Array<Genres> = ['Action', 'Comedy', 'Musical', 'Romance', 'Drama', 'Horror'];
export type FilterFormData = {
    [key in Genres]: boolean;
} & {
    from: string;
    to: string;
};

const FilterForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit: SubmitHandler<FilterFormData> = (data) => {
        const {from, to} = data;
        const difference = parseInt(to) - parseInt(from);
        if (difference < 0)
            alert("To field must be greater than or equal to From field");
        else {
            dispatch(changeFilters(data));
        }
    }
    const genreElements = genres.map(genre =>
        <div className={`${genre.toLowerCase()}-checkbox`} key={genre}>
            <div className="filter-movies">{genre}</div>
            <input
                type="checkbox"
                placeholder={genre}
                name={genre}
                ref={register}/>
        </div>
    )
    const numberRules = {
        max: {value: 2020, message: "Max value cannot be in the future"},
        minLength: {value: 4, message: "Must be a 4 digit number"}
    };
    return (
        <View>
            
        </View>
    );
};

export default FilterForm;
