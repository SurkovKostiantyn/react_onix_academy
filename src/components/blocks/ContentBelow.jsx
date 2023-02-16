import { Component } from "react";
import JustALittleTag from "../elements/JustALittleTag";

export default class ContentBelow extends Component {
    render() {
        return (
            <div className="content-below">
                <JustALittleTag tag="p" className="content-below-text"
                                text="Richird Norton photorealistic rendering as real photos"/>
                <JustALittleTag tag="p" className="content-below-text"
                                text="Progressively incentivize cooperative systems through technically sound"/>
            </div>
        )
    }
}
