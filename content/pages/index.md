---
title: Home
layout: PageLayout
Freeform:
  Boxes:
    - type: Box
      title: Container
      extraLargeWidth: 100
      largeWidth: 100
      mediumWidth: 100
      smallWidth: 100
      Boxes:
        - title: PLANETARY
          type: Banner
      display: flex
      wrap: none
      flexDirection:
        label: Row
        value: row
      justify: center
      align: center
      order: 0
    - type: Box
      title: Three Column Cards
      extraLargeWidth: 100
      largeWidth: 100
      mediumWidth: 100
      smallWidth: 100
      Boxes:
        - type: Box
          title: Card Column One
          extraLargeWidth: 32
          largeWidth: 32
          mediumWidth: 100
          smallWidth: 100
          Boxes:
            - title: Hello Earth
              undefined:
                url: >-
                  https://assets.stackbit.com/components/images/default/default-image.png
                altText: altText of the image
                caption: Caption of the image
                styles:
                  self:
                    opacity: 100
              type: Card
              image:
                altText: Hello Earth
                caption: Hello Earth
                styles:
                  self:
                    opacity: 100
                url: /images/earth.jpg
          display: flex
          wrap: none
          flexDirection:
            label: Row
            value: row
          justify:
            label: Start
            value: start
          align:
            label: Start
            value: flex-start
          order: 0
        - type: Box
          title: Card Column Two
          extraLargeWidth: 32
          largeWidth: 32
          mediumWidth: 100
          smallWidth: 100
          Boxes:
            - title: Hello Mars
              undefined:
                url: >-
                  https://assets.stackbit.com/components/images/default/default-image.png
                altText: altText of the image
                caption: Caption of the image
                styles:
                  self:
                    opacity: 100
              type: Card
              image:
                url: /images/mars.jpg
                altText: Hello Mars
                caption: Hello Mars
                styles:
                  self:
                    opacity: 100
          display: flex
          wrap: none
          flexDirection:
            label: Row
            value: row
          justify:
            label: Start
            value: start
          align:
            label: Start
            value: flex-start
          order: 0
        - type: Box
          title: Card Column Three
          extraLargeWidth: 32
          largeWidth: 32
          mediumWidth: 100
          smallWidth: 100
          Boxes:
            - title: Hello Saturn
              undefined:
                url: >-
                  https://assets.stackbit.com/components/images/default/default-image.png
                altText: altText of the image
                caption: Caption of the image
                styles:
                  self:
                    opacity: 100
              type: Card
              image:
                url: /images/saturn.jpg
                altText: Hello Saturn
                caption: Hello Saturn
                styles:
                  self:
                    opacity: 100
          display: flex
          wrap: none
          flexDirection:
            label: Row
            value: row
          justify:
            label: Start
            value: start
          align:
            label: Start
            value: flex-start
          order: 0
      display: flex
      wrap: wrap
      flexDirection:
        label: Row
        value: row
      justify: space-between
      align:
        label: Start
        value: flex-start
      order: 0
    - type: Box
      title: Container
      extraLargeWidth: 100
      largeWidth: 100
      mediumWidth: 100
      smallWidth: 100
      Boxes:
        - type: Box
          extraLargeWidth: 100
          largeWidth: 100
          mediumWidth: 100
          smallWidth: 100
          Boxes:
            - type: Box
              title: Hello Neptune
              extraLargeWidth: 49
              largeWidth: 49
              mediumWidth: 100
              smallWidth: 100
              Boxes:
                - title: Hello Uranus
                  image:
                    url: /images/uranus.jpg
                    altText: Hello Uranus
                    caption: Hello Uranus
                    styles:
                      self:
                        opacity: 100
                  type: Card
              display: flex
              wrap: none
              flexDirection:
                label: Row
                value: row
              justify:
                label: Start
                value: start
              align:
                label: Start
                value: flex-start
              order: 0
            - type: Box
              title: Hello Venus
              extraLargeWidth: 49
              largeWidth: 49
              mediumWidth: 100
              smallWidth: 100
              Boxes:
                - title: Hello Neptune
                  image:
                    url: /images/neptune.jpg
                    altText: Hello Neptune
                    caption: Hello Neptune
                    styles:
                      self:
                        opacity: 100
                  type: Card
              display: flex
              wrap: none
              flexDirection:
                label: Row
                value: row
              justify:
                label: Start
                value: start
              align:
                label: Start
                value: flex-start
              order: 0
          display: flex
          wrap: wrap
          flexDirection:
            label: Row
            value: row
          justify: space-between
          align:
            label: Start
            value: flex-start
          order: 0
          title: 'Card Two Column '
      display: flex
      wrap: none
      flexDirection:
        label: Row
        value: row
      justify:
        label: Start
        value: start
      align:
        label: Start
        value: flex-start
      order: 0
---
