import React from 'react';
import './css/portrait.css';
import './css/weather.css';
import './css/directory.css';
import './css/saskatoon_square.css';
import setTime from "./js/clock";
import table from "./js/table";


function App() {


    return (

        <div id="everything">

            <div id="refresh_response"/>

            <div id="o_container">
                {/*HEADER*/}
                <div id="o_header">

                    <div id="top_text">
                        {setTime()}
                    </div>
                </div>

                <div id="o_hspacer"/>

                {/*CONTENT*/}
                <div id="o_content">
                    <div id="o_content_inner">
                        <div id="refresh_directory">
                            {/*<script type="text/javascript">directoryFade.resetContent();</script>*/}
                            <div id="marqueecontainer">
                                <table className="o_tenant_table" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                    <tr>
                                        <td>

                                            <div className="fadeElem" id="fadeElem0"/>
                                            {table()}

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="o_spacer"/>

                    <div className="o_ads">
                        <div id="refresh_ads">
                        </div>
                    </div>
                </div>

                <div id="o_hspacer2"/>


                {/*FOOTER*/}
                <div id="o_footer">
                    <script></script>
                    <div className="o_footer_left">
                        <div className="o_messages">
                            <div id="refresh_notice_lines">
                                <div id="messagescroller" />
                                <script></script>
                            </div>
                        </div>
                    </div>
                    <div className="o_weather">
                        <div id="refresh_weather">
                            <table>
                                <tbody>
                                <tr>
                                    <td width="100%" align="right">
                                        <div className="weatherfadeElem" id="weatherfadeElem"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    );
}

export default App;
