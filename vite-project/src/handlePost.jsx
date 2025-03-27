import { set } from "lodash";
import { useState } from "react";

export default function handlePost(newMovieTitle, setTitles) {

    fetch("http://localhost:8080/titles", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newMovieTitle })
    })
        .then(res => res.json())
        .then(() => {
        return fetch("http://localhost:8080/titles");
        })

        .then(res => res.json())
        .then(updatedTitles=> {
            console.log("Movie added:", updatedTitles);
            setTitles(updatedTitles);
        })

}
