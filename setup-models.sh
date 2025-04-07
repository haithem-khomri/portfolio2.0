#!/bin/bash

# Create models directory
mkdir -p public/models

# Download models
curl -o public/models/tensorflow.glb https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/tensorflow-logo/model.gltf
curl -o public/models/pytorch.glb https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/pytorch-logo/model.gltf
curl -o public/models/google.glb https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/google-logo/model.gltf
curl -o public/models/html5.glb https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/html5-logo/model.gltf
curl -o public/models/css3.glb https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/css3-logo/model.gltf 