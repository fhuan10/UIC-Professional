import { useState } from 'react'
import './FindSomeone.css'
import Filter from './FindSomeoneComponents/Filter'
import Card from './FindSomeoneComponents/Card'
import PageTemplate from './PageTemplate'


function FindSomeone() {

    return (
        <div className="FindSomeone">
            <PageTemplate />
            <h1 className="FindSomeoneTitle">Connect with Someone in the UIC Community</h1>
            <form className="Search">
                <input className="SearchBar" type="search" placeholder="Search a name..."></input>
                <button className="SearchButton" type="submit">SEARCH</button>
            </form>

            <div className="connect-page-content">
                <div className="Cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Filter />

            </div>


        </div>
    )
}

export default FindSomeone
