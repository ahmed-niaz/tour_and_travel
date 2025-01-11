import QueryBuilder from '../../builder/queryBuilder';
import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (payload: ITour): Promise<ITour> => {
  const result = await Tour.create(payload);
  return result;
};

const getTours = async (payload: Record<string, unknown>) => {
  /**
   // {searchTerm: "seater"}
  console.log('main', payload);
  const payloadObject = { ...payload };

  const excludingImportant = [
    'searchTerm',
    'page',
    'limit',
    'sortOrder',
    'sortBy',
    'fields',
  ];
  excludingImportant.forEach((key) => delete payloadObject[key]);
  console.log('Object', payloadObject);

  const searchTerm = payload?.searchTerm || '';

  const searchableFields = ['name', 'startLocation', 'locations'];

  // options - 1
  // const result = await Tour.find({
  //   $or: [
  //     { name: { $regex: searchTerm, $options: 'i' } },
  //     { startLocation: { $regex: searchTerm, $options: 'i' } },
  //     { locations: { $regex: searchTerm, $options: 'i' } },
  //   ],
  // });

  const searchQuery = Tour.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // filtering
  const filterQuery = searchQuery.find(payloadObject);

  // pagination
  const page = Number(payload?.page) || 1;
  const limit = Number(payload?.limit) || 10;

  const offset = (page - 1) * limit;

  const paginatedQuery = filterQuery.skip(offset).limit(limit);

  let sortStr;

  if (payload?.sortBy && payload?.sortOrder) {
    const sortBy = payload?.sortBy;
    const sortOrder = payload?.sortOrder;
    // if desc then sortBy with - so [-price] or something
    sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
  }

  // const result =  paginatedQuery.sort(sortStr);
  const sortQuery = paginatedQuery.sort(sortStr);

  // field selection
  let fields = '-__v';
  if (payload?.fields) {
    fields = (payload.fields as string).split(',').join(' ');
  }

  const result = await sortQuery.select(fields);

  // functional way
  // ()

   **/


  const searchableFields = ['name', 'startLocation', 'locations'];

  const tours = new QueryBuilder(Tour.find(),payload).search(searchableFields).filter().sort().paginate().select()

  const result = await tours.modelQuery;

  return result;
};

const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};

const updateTour = async (id: string, payload: ITour) => {
  const result = await Tour.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);

  return result;
};

export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  deleteTour,
  updateTour,
};
