import json


def get_file_data(file_name):
    file = open(file_name)
    data = json.load(file)
    file.close()
    return data


colors_data = get_file_data("colors.json")
families_data = get_file_data("families.json")
genders_data = get_file_data("genders.json")
life_forms_data = get_file_data("lifeForms.json")
photos_data = get_file_data("photos.json")
places_data = get_file_data("places.json")
species_data = get_file_data("species.json")
species_places_data = get_file_data("speciesPlaces.json")


def find_by_id(array, item_id):
    for item in array:
        if item['id'] == item_id:
            return item


def get_colors(item):
    color1_id = int(item["color1_id"])
    colors = [find_by_id(colors_data, color1_id)["nombre"]]

    if item["color2_id"] != 'null':
        color2_id = int(item["color2_id"])
        color2 = find_by_id(colors_data, color2_id)
        colors.append(color2["nombre"])
    return colors


def get_life_forms(item):
    life_form1_id = int(item["forma_vida1_id"])
    life_forms = [find_by_id(life_forms_data, life_form1_id)["nombre"]]

    if item["forma_vida2_id"] != 'null':
        life_form2_id = int(item["forma_vida2_id"])
        life_form2 = find_by_id(life_forms_data, life_form2_id)
        life_forms.append(life_form2["nombre"])
    return life_forms


species = []
en = []
es = []

for index, element in enumerate(species_data):
    genero_id = int(element["genero_id"])
    genero = find_by_id(genders_data, genero_id)

    familia_id = int(genero["familia_id"])
    familia = find_by_id(families_data, familia_id)

    name = element["nombre"]
    gender_name = genero["nombre"]
    family_name = familia["nombre"]
    key = f'{family_name}_{gender_name}_{name}'
    specie = {
        "id": index,
        "tropicos_id": element["id_tropicos"],
        "key": key.lower(),
        "name": name,
        "gender": gender_name,
        "family": family_name,
        "colors": get_colors(element),
        "life_forms": get_life_forms(element),
        "thumbnail": element["thumbnail"]
    }
    print(specie)
    species.append(specie)

# print(find_by_id(colors_data, 15))

# for data in species_data:
#     specie = {
#
#     }
