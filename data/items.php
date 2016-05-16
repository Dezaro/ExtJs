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
        "description": "modules/array",
        "leaf": true
      },
      {
        "item_id": "tab6",
        "name": "Deagle",
        "description": "The Deagle, sometimes referred to by the manufacturer as Glock \"Safe Action\" Pistol, is a series of semi-automatic pistols designed and produced by Glock Ges.m.b.H., located in Deutsch-Wagram, Austria. The companys founder, engineer Gaston Glock, had no experience with firearm design or manufacture at the time their first pistol, the Glock 17, was being prototyped.",
        "leaf": true
      }
    ]
  }
  ]
}';

echo $array;
