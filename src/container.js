var React = require('react');
var SyntaxHighlighter = require('react-syntax-highlighter').default;
var jsxToString = require('jsx-to-string'); 
var docco = require('react-syntax-highlighter/dist/styles').docco;
var Section = require('./section');
var Button = require('./uiElements/components/buttons/button');
var FlatButton = require('./uiElements/components/buttons/flatButton');
var CollectionItem = require('./uiElements/components/collections/collectionItem');
var CollectionItemContent = require('./uiElements/components/collections/collectionItemContent_example'); //Example views for collection item content
var CollectionItemAction = require('./uiElements/components/collections/collectionItemAction_example'); //Example views for item actions
var SearchBar = require('./uiElements/components/search/searchBar');
var SelectOption = require('./uiElements/components/select/selectOption');
var RangeSlider = require('./uiElements/components/rangeSlider/rangeSlider');
var Card = require('./uiElements/components/card/card');
var Loading = require('./uiElements/components/loading/loading');
var Tag = require('./uiElements/components/tag/tag');
var Pagination = require('./uiElements/components/pagination/pagination');
var ButtonGroup = require('./uiElements/components/buttonGroup/buttonGroup');
var Folder = require('./uiElements/components/folder/folder');
var ActionBar = require('./uiElements/components/actions/actionBar');
var DropDown = require('./uiElements/components/dropDown/dropDown');
var DropDownItems = require('./uiElements/components/dropDown/dropDownItems_example');
var ProgressBar = require('./uiElements/components/progressBar/progressBar');
var ItemToggle = require('./uiElements/components/toggle/itemToggle');
var ListItem = require('./uiElements/components/list/listItem');
var ListItems = require('./uiElements/components/list/listItems');
var Message = require('./uiElements/components/message/message');
var CssValue = require('./uiElements/components/cssValue/cssValue');
var CssBorderSelector = require('./uiElements/components/cssBorderSelector/cssBorderSelector');
var CssBorderRadiusSelector = require('./uiElements/components/cssBorderRadiusSelector/cssBorderRadiusSelector');
var StarRating = require('./uiElements/components/starRating/starRating');

var _ = require('underscore');
//Array is just an example of how the Folder component returns the data.
var Folders = [
        {
            text: 'Maths',
            _color: 'red',
            className: 'maths-folder'
        },
        {
            text: 'English',
            _color: 'blue'
        }
    ];

var Container = React.createClass({
/* THE FUNCTIONS BELOW ARE MADE UP OF FAKE DATA TO SHOW THE WORKING FUNCTIONALLITY OF THE COMPONENTS */
    
     getInitialState: function() {
        return {
            width: 100,
            unit: "PX",
            top: false,
            right: false,
            bottom: false,
            left: false,
            topLeft: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            starValue: 5,
            searchValue: ""
        }
    },

    onValueChanged: function(value) {
        this.setState({
            searchValue: value
        })

        console.log("the argument value is:", arguments)
    },

    onStarRatingChanged: function(value) {
        this.setState({
            starValue: value
        })
    },

    onWidthChanged: function(value) {
        this.setState({
            width: value
        });
    },

    onWidthIncrease: function(increaseBy) {  

        if (!_.isNumber(this.state.width)) {
            
            this.setState({
                width: 0
            });

            return;

        }

        this.setState({
            width: this.state.width + (1 * increaseBy)
        })
      
    },

    onWidthDecrease: function(decreaseBy) {
        this.setState({
            width: this.state.width - (1 * decreaseBy)
        })
    },

    onSelectorChanged: function(top, right, bottom, left) {
        console.log(arguments);
        this.setState({
            top: top,
            right: right,
            bottom: bottom,
            left: left
        })
    },

    onRadiusSelectorChanged: function(topLeft, topRight, bottomRight, bottomLeft) {
        console.log(arguments)
        this.setState({
            topLeft: topLeft,
            topRight: topRight,
            bottomRight: bottomRight,
            bottomLeft: bottomLeft
        })
    },

    onClick: function() {
        console.log('This component has been clicked')
    },

    onCloseButtonClicked: function() {
        console.log("The close button has been clicked")
    },

    //Simalar to the function above, this is an example to show the onChange event might work.
    onChange: function(event) {
        var value = event;
        if (event.target) {
            value = event.target.value;
        }

        console.log('This component has been changed', value);
        
    },



    getFolders: function() {
        return _.map(Folders, function(tag, index) {
            
            return (
                <Folder 
                    folder={tag}
                    key={index}
                    icon='tag'
                />
            )
        }, this);
    },  


/* ---------------------------------------------------------- */
    

    //This renders all the components and allows you too pass in all the neccasary props.
    render: function() {
        var actionBar = jsxToString(
            <ActionBar>
                <Button text="primary" type="primary" icon="star" />
            </ActionBar>
        );
        var button = jsxToString(
            <Button 
                icon="trash" 
                text="Primary Button" 
                className="primary" 
                onClick={this.onClick} 
                toolTip="oh yes primary" 
                toolTipPosition="bottom"/>
        );
        var buttonGroup = jsxToString(
             <ButtonGroup 
                onChange={this.onChange} 
                buttonType="primary" 
                value="menu" 
                className="group-view" 
                buttons={[
                    {
                        _icon: "menu",
                        _value: "menu"
                    }, {
                        _icon: "trash",
                        _value: "trash"
                    }, {
                        _icon: "check",
                        _value: "check",
                        toolTip: "hey there"
                    }
                ]} />
        );


        return (         
            <div>

                <Section
                    title="ActionBar"
                    description=""
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={actionBar}> 

                        </SyntaxHighlighter>
                    }
                >
                    <ActionBar>
                        <Button text="primary" type="primary" icon="star" />
                    </ActionBar>

                </Section>

                <Section
                    className="ui-elements-button"
                    title="Button"
                    description="A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon."
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={button}> 

                        </SyntaxHighlighter>
                    }
                >

                    <Button icon="trash" text="Primary Button" className="primary" onClick={this.onClick} toolTip="oh yes primary" toolTipPosition="bottom"/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} className="primary" text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>
                    <Button icon="arrow-left" onClick={this.onClick} toolTip="oh yes primary"/>
                    <Button icon="star" text="full width button" onClick={this.onClick} className="primary full-width" isSmall={true}/>
                    <Button icon="star" text="small button" onClick={this.onClick} className="secondary" isSmall={true}/>

                </Section>

                <Section
                    title="ButtonGroup"
                    description=""
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={buttonGroup}> 

                        </SyntaxHighlighter>
                    }
                >

                    <ButtonGroup onChange={this.onChange} buttonType="primary" value="menu" className="group-view" buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }, {
                            _icon: "check",
                            _value: "check",
                            toolTip: "hey there"
                        }
                    ]} />

                    <ButtonGroup 
                        onChange={this.onChange} 
                        buttonType="primary" 
                        value="menu" 
                        shouldUseToggle={false}
                        buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }
                    ]} />

                    <ButtonGroup 
                        onChange={this.onChange} 
                        buttonType="primary" 
                        value="menu" 
                        shouldUseToggle={true} 
                        buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash",
                            toolTip: "hey there",
                            toolTipPosition: "bottom"
                        }
                    ]} />
                    
                </Section>

                <Section
                    title="Collection Item"
                    description="A collection item Simalarly too a list item takes in a range of different elements. A Collection element usually consist of a contnent item and an action item underneath" 
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={ jsxToString(
                                <CollectionItem 
                                    className="course-collection-item" 
                                    contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body'/>} actionsComponent={<CollectionItemAction />} 
                                />
                            ) 
                        }>

                        </SyntaxHighlighter>
                    }
                >
                    

                    <CollectionItem className="course-collection-item" contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body' tag={<Tag text="Chemistry" tagColor="red" hasCloseButton={true}/>}/>} actionsComponent={<CollectionItemAction />} />

                </Section>


                <Section
                    title="DropDown"
                    description=""
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={jsxToString(
                                <DropDown icon="menu" className="menu-item" component={<DropDownItems/>}/>
                                )
                            }
                        />
                    }
                >

                    <DropDown icon="menu" className="menu-item" component={<DropDownItems/>}/>
                    
                </Section>

                <Section
                    title="Card"
                    description=""
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <Card className="asset review">
                                        <Button type="primary" text="for card component" onClick={this.onClick}/>
                                        <div>
                                            card component
                                        </div>
                                    </Card>
                                )
                            }
                        />
                    }
                >

                    <Card className="asset review">
                        <Button type="primary" text="for card component" onClick={this.onClick}/>
                        <div>
                            card component
                        </div>
                    </Card>
                    
                </Section>

                <Section
                    title="Css Border Selector">

                    <CssBorderSelector 
                        top={this.state.top}
                        right={this.state.right}
                        bottom={this.state.bottom}
                        left={this.state.left}
                        onChange={this.onSelectorChanged}
                    />
                </Section>

                <Section
                    title="Css Border Radius Selector"
                    description="">

                    <CssBorderRadiusSelector 
                        topLeft={this.state.topLeft}
                        topRight={this.state.topRight}
                        bottomRight={this.state.bottomRight}
                        bottomLeft={this.state.bottomLeft}
                        onChange={this.onRadiusSelectorChanged}
                    />

                </Section>

                <Section
                    title="Css Value"
                    description="">

                    <CssValue
                        unit={this.state.unit}
                        value={this.state.width}
                        onChange={this.onWidthChanged}
                        onIncrease={this.onWidthIncrease}
                        onDecrease={this.onWidthDecrease}
                    />

                </Section>

                <Section
                    title="Select Option"
                    description=""
                    documentation={
                        <SyntaxHighlighter
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <SelectOption
                                        className="options"
                                        value="Ascending" 
                                        options={[
                                            {
                                                text: 'Ascending',
                                                _value: 'Ascending',
                                                index: 0,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Descending',
                                                _value: 'Descending',
                                                index: 1,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Recent',
                                                _value: 'Recent',
                                                index: 2,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Oldest',
                                                _value: 'Oldest',
                                                index: 3,
                                                onClick: this.onClick
                                            }
                                        ]}
                                    />
                                )   
                            }
                        />
                    }
                >

                    <SelectOption
                        className="options"
                        value="Ascending" 
                        options={[
                            {
                                text: 'Ascending',
                                _value: 'Ascending',
                                index: 0,
                                onClick: this.onClick
                            },
                            {
                                text: 'Descending',
                                _value: 'Descending',
                                index: 1,
                                onClick: this.onClick
                            },
                            {
                                text: 'Recent',
                                _value: 'Recent',
                                index: 2,
                                onClick: this.onClick
                            },
                            {
                                text: 'Oldest',
                                _value: 'Oldest',
                                index: 3,
                                onClick: this.onClick
                            }
                        ]}
                    />
                    
                </Section>

                <Section
                    className="ui-elements-flat-button"
                    title="Flat Button"
                    description="A Flat button is displayed for frequently used actions. Generally a Button Action has no text, no background, only an icon."
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <FlatButton 
                                        className="article-item-buttons-edit-article " 
                                        type="primary" 
                                        icon="pencil4" 
                                        toolTip="edit button" 
                                        toolTipPosition="top" 
                                        onClick={this.onClick}
                                    />
                                )
                            }
                        />
                    }
                >

                <div className="primary-flat-buttons">
                    <FlatButton className="article-item-buttons-edit-article " type="primary" icon="pencil4" toolTip="edit button" toolTipPosition="top" onClick={this.onClick} disabled={true}/>
                    <FlatButton className="article-item-buttons-move-article-down " type="secondary" icon="exit-down2" onClick={this.onClick}/>
                    <FlatButton className="alert article-item-buttons-add-article-divider " toolTip="add here" icon="picture2" toolTipPosition="bottom" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-paste-article " toolTip="paste here" icon="paste" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick} toolTip="delete here" toolTipPosition="bottom"/>

                    <FlatButton className="secondary" icon="star" text="secondary flat" onClick={this.onClick}/>
                    <FlatButton className="primary" icon="star" text="primary flat" onClick={this.onClick} disabled={true}/>
                    <FlatButton icon="star" text="plain flat" onClick={this.onClick}/>



                </div>


                
                </Section>
                
                <Section
                    title="Folder"
                    description=""
                >
                
                    {this.getFolders()}
                    
                </Section>

                <Section 
                    title="Item toggle"
                    description="">

                    <ItemToggle 
                        className="" 
                        toggleId="toggle" 
                        initialValue={false} 
                        onChange={this.onChange}/>

                </Section>

                <Section
                    title="List"
                    description="">

                    <ListItems
                        shouldShowAlternativeColors={true}
                        className="dashboard-items"
                        items={[
                            <ListItem 
                                onClick={this.onClick} 
                                itemText="this is the text for the list item"
                                itemDetail="the item detail"
                                key={1}
                                buttons={
                                    [{
                                        type: "primary",
                                        icon: "pencil4",
                                        onClick: this.onClick    
                                    },
                                    {
                                        type: "secondary",
                                        icon: "screen"    
                                    },
                                    {
                                        type: "alert",
                                        icon: "trash"    
                                    },
                                    {
                                        type: "secondary",
                                        icon: "screen"    
                                    },
                                    {
                                        type: "primary",
                                        icon: "pencil4",
                                        onClick: this.onClick    
                                    },
                                    {
                                        type: "alert",
                                        icon: "trash"    
                                    }
                                ]}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                icon="book2"
                                key={2}
                                buttons={
                                    [{
                                        type: "alert",
                                        icon: "trash",
                                        onClick: this.onClick    
                                    }
                                ]}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                itemDetail="this is detail section"
                                key={3}
                                icon="book2"
                                onClick={this.onClick}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                icon="book2"
                                key={4}
                                onClick={this.onClick}
                            />,
                            <ListItem
                                key={5}
                                component={
                                    <div>
                                        The compoonent
                                    </div>
                                }
                                onClick={this.onClick}
                            />
                        ]}
                    />
                    
                    
                </Section>
               
                <Section
                    title="Loading"
                    description="">

                    <Loading text="Loading" className="login" hasDataLoaded={true}>
                        <div>
                            DATA HAS LOADED
                        </div>
                    </Loading>
                    
                </Section>

                <Section
                    title="Message"
                    description="">

                    <Message 
                        title="Brandon Karunakaran" 
                        body="Brandon recieved a message from the message/notification ui element"
                        onClick={this.onClick}
                        avatar="http://placehold.it/400x100"
                        onCloseButtonClicked={this.onCloseButtonClicked}
                        icon="alarm"
                        iconColor="red"
                        author="brandon Karunakaran"/>
                

                </Section>
                
                <Section
                    title="Pagination"
                    description="">

                    <Pagination currentPage={1} totalPages={0} buttonType="secondary" className="course" toolTipRightButton="right" toolTipRightButtonPosition="bottom" toolTipLeftButton="left" />
                    
                </Section>

                <Section
                    title="ProgressBar"
                    description="">

                    <ProgressBar value={23} />
                    
                </Section>
                
                <Section
                    title="Range Slider"
                    description="">
                    <RangeSlider
                        onChange={(value) => console.log('range slider value:', value)}
                        step={1}
                        min={1}
                        max={100}
                        defaultValue={30}
                    />
                </Section>
                
                <Section
                    title="Search bar"
                    description="">

                    <SearchBar onClick={this.onClick} onChange={this.onChange} placeholder="enter value here"/>
                    <SearchBar onClick={this.onClick} onChange={this.onValueChanged} value={this.state.searchValue} />
                    
                </Section>

                <Section
                    title="Star rating"
                    description="">

                    <StarRating total={5} value={this.state.starValue} onChange={this.onStarRatingChanged}/>

                </Section>

                <Section
                    title="Tag"
                    description="">

                    <Tag text="Chemistry" tagColor="red" hasCloseButton={true}/>
                    <Tag text="Biology" tagColor="violet"/>
                    <Tag text="Physics" tagColor="turquoise" hasCloseButton={true}/>
                    
                </Section>

            </div>
        );
    }

});

module.exports = Container;
