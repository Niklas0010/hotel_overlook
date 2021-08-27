import React from "react";
import { News } from "../../components/news/News";
import { Slider } from "../../components/slider/Slider";
import { Comments } from "../comments/Comments"
import { CommentsList } from "../comments/Comments"

export function Frontpage() {

    return(
    <>
        <Slider/>
        <News />
        <Comments />
    </>
    )
}
