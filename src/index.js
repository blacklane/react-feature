// @flow
// we don't need import React from "react", because we do not use JSX
// $FlowFixMe
import PropTypes from "prop-types";

/*::
import type { Node } from "react";
type Props = {
  name: string,
  config: {[string]: boolean},
  children: Node
}
*/

export function Feature({ name, config, children } /*: Props */) {
  const activeFeatures = Object.keys(config).filter(feature => config[feature]);
  const hasNegation = name[0] === "!";

  if (hasNegation) {
    name = name.slice(1);
    if (activeFeatures.indexOf(name) === -1) return children;
  } else {
    if (activeFeatures.indexOf(name) !== -1) return children;
  }

  return null;
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  config: PropTypes.objectOf(PropTypes.bool).isRequired,
  children: PropTypes.node.isRequired
};
