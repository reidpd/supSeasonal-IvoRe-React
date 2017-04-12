import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Home

////////////////////////////////////////////////////////////////////

<div className="Home">
  <div className="Home-header">
    <div> //Navbar
      <header>
        <div>
          <a href="#"><h2>supSeasonal!!</h2></a>
        </div>
        <div>
          <a href="#"><h3></h3></a>
        </div>
      </header>
    </div>
    <form onSubmit={this.handleSubmit}> //MonthDropdown
      <div className="dropdownMonth">
        <Dropdown placeholder='Select A Month' fluid selection options={months} onChange={(event, result) => { const {value} = result; this.props.setMonth(value) } } />
      </div>
      <div className="SearchButton">
        <Button color='blue'>Submit!</Button>
      </div>
    </form>
    <Row> //IngredientsList
      <Col s={12}>
        {_renderIngredients(this.props.ingredients)}
      </Col>
    </Row>
    <div> //RecipesList
      {_renderRecipes(this.props.recipes)}
      return recipes.map((item) => {
      return (
        <div>
          <Card header={<CardTitle reveal image={item.image} waves="light" />}
                title={item.title}
                reveal={
                  <div>
                    <Table>
                      <TableHeader>
                        <TableHeaderColumn>Visual</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                      </TableHeader>
                      <TableBody>
                        {_renderRecipeExtendedIngredients(item.extendedIngredients)}
                        return ingredients.map((ingr) => {
                        return  <TableRow>
                                  <TableRowColumn><img src={ingr.image} alt="" /></TableRowColumn>
                                  <TableRowColumn>{ingr.name}</TableRowColumn>
                                  <TableRowColumn>{ingr.originalString}</TableRowColumn>
                                </TableRow>
                        })
                      </TableBody>
                    </Table>
                    <p dangerouslySetInnerHTML={{ __html: item.instructions}} />
                  </div>
                  }>
                   <p>Ready to Eat in {item.readyInMinutes} Minutes</p>
                   <p>Yields {item.servings} Servings</p>
          </Card>
        </div>
      )
    })
    </div>
    {/*Insert and image */}
  </div>
</div>
