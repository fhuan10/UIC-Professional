import { useState } from 'react'
import './Filter.css'

function Filter() {

    return (
        <div className="Filter">
            <h2>FILTER SEARCH</h2>
            <form>
                <div className="MajorFilter">
                    <p>MAJOR</p>
                    <select className="MajorFilterDropdown">
                        <option></option>
                        <option>Biochemistry</option>
                        <option>Computer Science</option>
                        <option>Civil Engineering</option>
                        <option>Chemistry</option>
                    </select>


                </div>

                <div className="RoleFilter">
                    <p>ROLE</p>
                    <select className="RoleFilterDropdown">
                        <option></option>
                        <option>Freshman</option>
                        <option>Sopohomore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Graduate</option>
                        <option>Alumini</option>
                        <option>Professor</option>
                        <option>UIC Staff</option>
                    </select>

                </div>

                <div className="GenderFilter">
                    <p>GENDER</p>
                    <select className="GenderFilterDropdown">
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                    </select>
                </div>

                <button className="FilterButton" type="submit">FILTER</button>
            </form>
        </div>
    )
}

export default Filter
