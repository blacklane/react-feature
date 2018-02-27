# react-feature [![Build Status](https://travis-ci.org/pawelgalazka/react-feature.svg?branch=master)](https://travis-ci.org/pawelgalazka/react-feature) [![npm version](https://badge.fury.io/js/react-feature.svg)](https://badge.fury.io/js/react-feature)

## Setup

```
npm install react-feature --save
```

or

```
yarn add react-feature
```

and then

```javascript
import { Feature } from 'react-feature'
```

## Basic usage

Render feature depending on provided feature config:

```jsx
<Feature name='banner:head' config={{'banner:head': true, 'feature2': true}}>
 <strong>Some html related to the feature</strong>
</Feature>
```

If you want to render an alternative case for the feature, when the feature is not present,
you can use a negation sign within the name:

```jsx
<Feature name='!banner:head' config={{feature1: true, feature2: true}}>
 <i>Some alternative html for the feature</i>
</Feature>
```

## Usage with Redux

If you want to provide config for `<Feature>` component from Redux store, simply
create `<FeatureContainer>` and connect proper state to `config` prop:

```javascript
import { connect } from 'react-redux'
import { Feature } from 'react-feature'

const mapStateToProps = (state) => {
  return {
    config: state.featuresConfig
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const FeatureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feature)

export default FeatureContainer
```

and then use `<FeatureContainer>` instead:

```jsx
<FeatureContainer name='banner:head'>
 <strong>Some html related to the feature</strong>
</FeatureContainer>
```

## Usage with config file

```jsx
import { Feature } from 'react-feature'
import config from './config'

const FeatureContainer = ({name, children}) => (
  <Feature name={name} config={config}>
    {children}
  </Feature>
)

export default FeatureContainer
```