<?php

$array = '{
  "text": ".",
  "children": [{
    "name": "Big guns",
    "children": [
      {
        "item_id": "tab1",
        "name": "Simpsons",
        "description": "Application.view.Simpsons.Simpsons",
        "leaf": true
      },
      {
        "item_id": "tab2",
        "name": "Users",
        "description": "Application.view.users.UserGrid",
        "leaf": true
      }
    ]
  },
  {
    "name": "Small guns",
    "children": [
      {
        "item_id": "tab3",
        "name": "M1911 pistol",
        "description": "Application.view.grid.testView",
        "leaf": true
      },
      {
        "item_id": "tab4",
        "name": "Glock",
        "description": "Application.view.grid.ArrayGrid",
        "leaf": true
      }
    ]
  },
  {
    "name": "Low guns",
    "children": [
      {
        "item_id": "tab5",
        "name": "GFea1 pistol",
        "description": "Application.view.rowExpander.rowExpanderGrid",
        "leaf": true
      },
      {
        "item_id": "tab6",
        "name": "Deagle",
        "description": "Application.view.widget.widgetGrid",
        "leaf": true
      }
    ]
  }
  ]
}';

echo $array;
