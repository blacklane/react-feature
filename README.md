# react-feature
Simple ACL for React

{
  'user:mod': ['blog:view', 'blog:edit'],
  'user:admin': ['user:admin']
}


<FeaturesContext config={}>
  <Feature name='user:mode'>

  </Feature>

  <Feature name='!user:mod'>

  </Feature>

</FeaturesContext>


hasFeature('user:mod')