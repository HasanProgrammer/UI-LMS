import React from "react";

/*-------------------------------------------------------------------*/

//Plugins
import { Tab , TabList , TabPanel , Tabs } from "react-tabs";

/*-------------------------------------------------------------------*/

//Components
import QA           from "./QA";
import AboutTerm    from "./AboutTerm";
import VideosTerm   from "./VideosTerm";
import AboutTeacher from "./AboutTeacher";

/*-------------------------------------------------------------------*/

class CourseTabs extends React.Component
{
    render()
    {
        return (
            <div className="tab single-course-tab" style={{cursor: "default"}}>

                <Tabs>
                    <TabList>
                        <Tab>درباره دوره</Tab>
                        <Tab>نمایش فیلم ها</Tab>
                        <Tab>مدرس دوره</Tab>
                        <Tab>تیکت پشتیبانی</Tab>
                    </TabList>

                    <TabPanel>
                        <AboutTerm/>
                    </TabPanel>

                    <TabPanel>
                        <VideosTerm/>
                    </TabPanel>

                    <TabPanel>
                        <AboutTeacher/>
                    </TabPanel>

                    <TabPanel>
                        <QA/>
                    </TabPanel>
                </Tabs>

            </div>
        )
    }
}

export default CourseTabs;