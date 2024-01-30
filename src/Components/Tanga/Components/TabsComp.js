import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"

function TabsComp(props){
    return (
        <div className="tabs">
            <Tabs isFitted width={"100vw"} height={"100vh"}>
                <TabList>
                    <Tab>{props.one.title}</Tab>
                    <Tab>{props.two.title}</Tab>
                    <Tab>{props.three.title}</Tab>
                    <Tab>{props.four.title}</Tab>

                </TabList>
                <TabPanels width={"50%"}>
                    <TabPanel> {props.one.content} </TabPanel>
                    <TabPanel> {props.two.content} </TabPanel>
                    <TabPanel> {props.three.content} </TabPanel>
                    <TabPanel>{props.four.content}</TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComp