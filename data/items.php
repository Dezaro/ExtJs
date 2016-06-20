<?php

$array = '{
  "text": ".",
  "children": [{
    "name": "Модул",
    "children": [
      {
        "item_id": "tab1",
        "name": "Simpsons",
        "description": "Application.view.Simpsons.Simpsons",
        "leaf": true,
        "icon": "img/icon/Simpsons.png",
      },
      {
        "item_id": "tab2",
        "name": "Users",
        "description": "Application.view.users.UserGrid",
        "leaf": true,
        "icon": "img/icon/Users.png",
      }
    ]
  },
  {
    "name": "Small guns",
    "children": [
      {
        "item_id": "tab3",
        "name": "FilterGrid",
        "description": "Application.view.grid.testView",
        "leaf": true,
        "icon": "img/icon/FilterGrid.png",
      },
      {
        "item_id": "tab4",
        "name": "ArrayGrid",
        "description": "Application.view.grid.ArrayGrid",
        "leaf": true,
        "icon": "img/icon/ArrayGrid.png"
      }
    ]
  },
  {
    "name": "Low guns",
    "children": [
      {
        "item_id": "tab5",
        "name": "RowExpander",
        "description": "Application.view.rowExpander.rowExpanderGrid",
        "leaf": true,
        "icon": "img/icon/RowExpander.png"
      },
      {
        "item_id": "tab6",
        "name": "Widget",
        "description": "Application.view.widget.widgetGrid",
        "leaf": true,
        "icon": "img/icon/Widget.png"
      },
      {
        "item_id": "tab7",
        "name": "Search",
        "description": "Application.view.search.searchGrid",
        "leaf": true,
        "icon": "img/icon/Search.png"
      },
      {
        "item_id": "tab8",
        "name": "DragAndDrop",
        "description": "Application.view.DragAndDrop.dragAndDropPanel",
        "leaf": true,
        "icon": "img/icon/DragAndDrop.png"
      }
    ]
  }
  ]
}';

echo $array;
