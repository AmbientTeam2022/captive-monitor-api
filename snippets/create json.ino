// Código Arduino

DynamicJsonDocument doc(2048);
doc["uuid"] = "12345";

JsonObject state = doc.createNestedObject("state");
state["soilHumidity"] = 30;
state["soilTemperature"] = 24;
state["roomHumidity"] = 52;
state["roomTemperature"] = 26;
state["waterLevel"] = 0;
state["waterTemperature"] = 0;
