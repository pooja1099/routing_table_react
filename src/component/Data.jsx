import React from 'react'
import "./mycss.css"

const Data = () => {
  return (
    <div>
        <table className="container">
            <caption >DATA</caption>
            <thead >
                <tr>
                <th >Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>CTU</td>
                   <td>Chandigarh</td>
                   <td>Rohtak</td>
                   <td>15 july </td>
                </tr>
                <tr>
                   <td>Haryana</td>
                   <td>Chandigarh</td>
                   <td>Hisar</td>
                   <td>17 july </td>
                </tr>
                <tr>
                   <td>HP</td>
                   <td>Delhi</td>
                   <td>Rohtak</td>
                   <td>19 july </td>
                </tr>
                <tr>
                   <td>CTU</td>
                   <td>Punjab</td>
                   <td>Chandigarh</td>
                   <td>20 july </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Data