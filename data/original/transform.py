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
species = []
all_colors = []
all_life_forms = []
all_places = []
en = {}
es = {}


def find_by_id(array, item_id):
    for item in array:
        if item['id'] == item_id:
            return item


def find_for_species(array, item_id):
    found = []
    for item in array:
        if item["especie_id"] == str(item_id):
            found.append(item)
    return found


def get_photos(item_id):
    photos_raw = find_for_species(photos_data, item_id)
    photos = []
    for photo in photos_raw:
        photos.append(photo["path"])
    return photos


def get_colors(item):
    color1_id = int(item["color1_id"])
    color1_name = find_by_id(colors_data, color1_id)["nombre"]
    if color1_name not in all_colors:
        all_colors.append(color1_name)
    colors = [color1_name]

    if item["color2_id"] != 'null':
        color2_id = int(item["color2_id"])
        color2 = find_by_id(colors_data, color2_id)
        color2_name = color2["nombre"]
        if color2_name not in all_colors:
            all_colors.append(color2_name)
        colors.append(color2_name)
    return colors


def get_life_forms(item):
    life_form1_id = int(item["forma_vida1_id"])
    life_form1_name = find_by_id(life_forms_data, life_form1_id)["nombre"]
    if life_form1_name not in all_life_forms:
        all_life_forms.append(life_form1_name)
    life_forms = [life_form1_name]

    if item["forma_vida2_id"] != 'null':
        life_form2_id = int(item["forma_vida2_id"])
        life_form2 = find_by_id(life_forms_data, life_form2_id)
        life_form2_name = life_form2["nombre"]
        if life_form2_name not in all_life_forms:
            all_life_forms.append(life_form2_name)
        life_forms.append(life_form2_name)
    return life_forms


for index, element in enumerate(species_data):
    genero_id = int(element["genero_id"])
    genero = find_by_id(genders_data, genero_id)

    familia_id = int(genero["familia_id"])
    familia = find_by_id(families_data, familia_id)

    name = element["nombre"]
    gender_name = genero["nombre"]
    family_name = familia["nombre"]
    key = f'{family_name}_{gender_name}_{name}'
    key = key.lower()
    specie = {
        "id": index,
        "tropicos_id": element["id_tropicos"],
        "key": key,
        "name": name,
        "gender": gender_name,
        "family": family_name,
        "colors": get_colors(element),
        "life_forms": get_life_forms(element),
        "thumbnail": element["thumbnail"],
        "photos": get_photos(element["id"])
    }
    print(specie)
    species.append(specie)
    i18n_es = {
        "description": element["descripcion_es"],
        "distribution": element["distribucion_es"]
    }
    es[key] = i18n_es
    i18n_en = {
        "description": element["descripcion_en"],
        "distribution": element["distribucion_en"]
    }
    en[key] = i18n_en
all_colors.sort()
all_life_forms.sort()
