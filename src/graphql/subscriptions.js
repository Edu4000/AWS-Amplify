/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModifications = /* GraphQL */ `
  subscription OnCreateModifications {
    onCreateModifications {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModifications = /* GraphQL */ `
  subscription OnUpdateModifications {
    onUpdateModifications {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModifications = /* GraphQL */ `
  subscription OnDeleteModifications {
    onDeleteModifications {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLicence = /* GraphQL */ `
  subscription OnCreateLicence {
    onCreateLicence {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLicence = /* GraphQL */ `
  subscription OnUpdateLicence {
    onUpdateLicence {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLicence = /* GraphQL */ `
  subscription OnDeleteLicence {
    onDeleteLicence {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReservations = /* GraphQL */ `
  subscription OnCreateReservations {
    onCreateReservations {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReservations = /* GraphQL */ `
  subscription OnUpdateReservations {
    onUpdateReservations {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReservations = /* GraphQL */ `
  subscription OnDeleteReservations {
    onDeleteReservations {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
