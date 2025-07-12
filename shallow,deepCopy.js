const original = {
  name: "Viet Anh",
  address: { city: "Hanoi" }
};

const copy = { ...original }; // Shallow copy

copy.name = "Khác";             // OK, không ảnh hưởng original
copy.address.city = "Saigon";   // ⚠️ Gây ảnh hưởng original!

console.log(original); 
