#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -o public/images/pepe-logo.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/pepe-hero.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/pepe-about.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/pepe-buy.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/pepe-tokenomics.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/pepe-roadmap.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg

# Download icons
curl -o public/images/wallet-icon.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/eth-icon.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/uniswap-icon.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/swap-icon.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg

# Download exchange logos
curl -o public/images/bybit-logo.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/upbit-logo.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/revolut-logo.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg
curl -o public/images/uniswap-logo.png https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg

# Download favicon
curl -o public/images/favicon.ico https://static.wixstatic.com/media/c267fc_29f2c0df100a457f8389688896626c8b~mv2.jpg 