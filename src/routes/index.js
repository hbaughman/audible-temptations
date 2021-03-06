import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import ApplyTheme from 'components/ApplyTheme';
import HomeView from 'views/HomeView/HomeView';
import Auth from 'views/AuthView/';
import ManageLocations from 'views/ManageLocationsView';
import FilterLibrary from 'views/FilterLibraryView';
import Override from 'views/OverrideView';
import Library from 'views/LibraryView';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/auth' component={Auth} />
    <Route path='/manageLocations' component={ManageLocations} />
    <Route path='/filterLibrary' component={FilterLibrary} />
    <Route path='/override' component={Override} />
    <Route path='/library' component={Library} />

  </Route>
)
