import { apartments } from '../data/apartments'

const simulateLatency = (payload) => Promise.resolve(payload)

export const getApartments = async () => simulateLatency(apartments)

export const getApartmentById = async (apartmentId) =>
  simulateLatency(apartments.find((apartment) => apartment.id === apartmentId) ?? null)
